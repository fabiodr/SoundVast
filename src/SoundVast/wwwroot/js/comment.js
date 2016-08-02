function commentsInit(audioId) {
    $("#comments-sidebar .sort a").data("sortDescending", true);
    $("#comments-sidebar .sort a").first().data("sortDescending", false);

    $("#comments-sidebar .sort a").click(function (e) {
        e.preventDefault();

        var $self = $(this);
        var sortDescending = $self.data("sortDescending");

        $.post($self.attr("action"), { audioId: audioId, sortDescending: sortDescending }).success(function (data) {
            $("#comments").html(data);
            $self.data("sortDescending", !sortDescending);
        });
    });

    $("#comments").on("click", ".reply-body a", function (e) {
        e.preventDefault();

        var $self = $(this);
        var $replyBody = $self.closest(".reply-body");
        $replyBody.data("PreviousHtml", $replyBody.html());

        $.get($self.attr("href")).success(function (data) {
            $replyBody.html(data);
        });
    });

    $("#comments .rating a").on("click", function (e) {
        e.preventDefault();
        debugger;
        rate($(this).children(), $(this).siblings("a").children(), $(this).attr("href"));
    });

    $("#comments").on("click", ".fa-flag", function (e) {
        e.preventDefault();

        $.get($self.attr("href")).success(function (data) {
            showPopup(data);
            $("#popup").addClass("popup-wide");
        });
    });

    $("#comments").on("click", ".fa-pencil", function (e) {
        e.preventDefault();

        var $self = $(this);
        var $commentBody = $self.closest(".comment").children(".comment-body");

        $commentBody.data("PreviousHtml", $commentBody.html());

        $.get($self.attr("href")).success(function (data) {
            $commentBody.html(data);
        });
    });

    $("#comments").on("submit", "form.edit", function (e) {
        e.preventDefault();
        var $self = $(this);

        $.post($self.attr("action"), $self.serialize()).success(function (data) {
            $self.closest(".comment-body").html(data);
        }).error(function (jqXhr) {
            if (jqXhr.status === 400) {
                $self.html(jqXhr.responseText);
            }
            //ToDo: Show error message here in view
        });
    });

    $("#comments").on("submit", "form.reply", function (e) {
        e.preventDefault();
        var $self = $(this);

        $.post($self.attr("action"), $self.serialize()).success(function (data) {
            $self.parents(".comment").last().append(data);
            var $body = $self.parent();
            var previousHtml = $body.data("PreviousHtml");

            $body.html(previousHtml);
        }).error(function (jqXhr) {
            if (jqXhr.status === 400) {
                $self.html(jqXhr.responseText);
            }
            //ToDo: Show error message here in view
        });
    });

    $("#comments").on("click", "form input[type=button]", function () {
        var $body = $(this).closest("form").parent();
        var previousHtml = $body.data("PreviousHtml");

        $body.html(previousHtml);
    });

    $("#comments-sidebar #create-comment").submit(function (e) {
        e.preventDefault();
        var $self = $(this);

        $.post($self.attr("action"), $self.serialize()).success(function (data) {
            $self.siblings("#comments").prepend(data);
            $self.find("textarea").val("");
        }).error(function (jqXhr) {
            if (jqXhr.status === 400) {
                $self.html(jqXhr.responseText);
            }
            //ToDo: Show error message here in view
        });
    });

    $("#comments").on("click", ".fa-times", function (e) {
        e.preventDefault();

        var $self = $(this);

        $.post($self.attr("href")).success(function (data) {
            if (!data) {
                $self.closest(".comment").remove();
            } else {
                $self.closest(".comment").replaceWith(data);
            }
        });
    });

    $("#comments").on("click", ".show-more", function (e) {
        e.preventDefault();

        var $self = $(this);

        $.get($(this).data().url, function (data) {
            $self.closest(".comment").append(data);
            $self.hide();
        });
    });
}