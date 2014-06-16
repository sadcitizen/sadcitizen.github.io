---
layout: post
title: Примеры кода на HTML
excerpt: "Простые пример кода на HTML, предназначенные для тестирования подсветки синтаксиса для листингов"
---

{% highlight html %}
<header class="l-header">
    <div class="l-container">
        <h3 class="masthead-title">
            <a href="/" title="Home">Евгений Абросимов</a>
            <small>Frontend-разработчик</small>
        </h3>
    </div>
</header>
{% endhighlight %}

{% highlight html %}
<body>
    <header>
        <div class="content-wrapper">
            <div class="float-left">
                <p class="site-title">@Html.ActionLink("your logo here", "Index", "Home")</p>
            </div>
            <div class="float-right">
                <section id="login">
                    @Html.Partial("_LoginPartial")
                </section>
                <nav>
                    <ul id="menu">
                        <li>@Html.ActionLink("Home", "Index", "Home")</li>
                        <li>@Html.ActionLink("About", "About", "Home")</li>
                        <li>@Html.ActionLink("Contact", "Contact", "Home")</li>
                        <li>@Html.ActionLink("Page", "Index", "Page")</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <div id="body">
        @RenderSection("featured", required: false)
        <section class="content-wrapper main-content clear-fix">
            @RenderBody()
        </section>
    </div>
    <footer>
        <div class="content-wrapper">
            <div class="float-left">
                <p>&copy; @DateTime.Now.Year - My ASP.NET MVC Application</p>
            </div>
        </div>
    </footer>
    @{
        IncludeScripts();
    }
</body>
{% endhighlight %}

{% highlight html %}
<script id="message_single_view_tmpl" type="text/html">
    <% if(removed) { %>
    <p class="message-removed alert-removed">@T("Сообщение удалено.") <a href="#" class="message-restore">@T("Восстановить.")</a></p>
    <% } else { %>
    <% if(error) { %>
    <p class="message-header">
        <a href="<%= Sender.ProfilePageUrl %>" class="message-sender"><%= Sender.Name %></a>
        <span class="message-error-alert">@T("Сообщение не отправлено.") <a href="#" class="message-error-handle">@T("Повторить.")</a></span>
    </p>
    <p class="message-body"><%= Body %></p><i class="icon-img icon-checked"></i>
    <% } else { %>
    <p class="message-header">
        <a href="<%= Sender.ProfilePageUrl %>" class="message-sender"><%= Sender.Name %></a>
        <span class="message-date"><%= SendedAtString %></span>
    </p>
    <p class="message-body"><%= Body %></p><i class="icon-img icon-checked"></i>
    <% } %>
    <% } %>
</script>
{% endhighlight %}