using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using Microsoft.AspNetCore.Http;

namespace SoundVast.Components.Upload
{
    public class FormInputType : InputObjectGraphType
    {
        public FormInputType()
        {
            Name = "FormInput";
           
            Field<NonNullGraphType<StringGraphType>>("FileName");
            Field<NonNullGraphType<StringGraphType>>("ContentType");
        }
    }
}
