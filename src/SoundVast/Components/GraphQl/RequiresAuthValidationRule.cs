using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Language.AST;
using GraphQL.Validation;

namespace SoundVast.Components.GraphQl
{
    public class RequiresAuthValidationRule : IValidationRule
    {
        public INodeVisitor Validate(ValidationContext context)
        {
            var userContext = context.UserContext.As<Context>();
            var loggedIn = userContext.CurrentUser != null;
            var claims = userContext.HttpContext.User.Claims;

            return new EnterLeaveListener(_ =>
            {
                _.Match<Field>(fieldAst =>
                {
                    var fieldDef = context.TypeInfo.GetFieldDef();
                    if (fieldDef != null && fieldDef.RequiresPermissions() &&
                        (!loggedIn || !fieldDef.CanAccess(claims)))
                    {
                        context.ReportError(new ValidationError(
                            context.OriginalQuery,
                            "auth-required",
                            "You must be logged in to run this query.",
                            fieldAst));
                    }
                });
            });
        }
    }
}
