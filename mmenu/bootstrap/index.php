

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="author" content="www.frebsite.nl" />
    <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=yes" />

    <title>mmenu - Demo</title>

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://mmenujs.com/demo/css/demo.css?v=8.4.0" />
    <link rel="stylesheet" href="https://mmenujs.com/mburger/mburger.css" />
    <link rel="stylesheet" href="https://mmenujs.com/mmenu-light/mmenu-light.css?v=8.4.0" />
    <link rel="stylesheet" href="https://mmenujs.com/mmenu/mmenu.css?v=8.4.0" />
    <link rel="stylesheet" href="https://mmenujs.com/mhead/jquery.mhead.css?v=8.4.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap.min.css" />
    <style>
        .content {
            padding-top: 150px;
        }
        .content:before {
            content: none;
        }
    </style>	</head>
<body>
<div id="page">

    <div class="content">
        <div class="container">
            <div class="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menu">

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-default my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <br />
            <p><strong>This is a demo.</strong><br />
                It demonstrates the use of mmenu with a Bootstrap navbar.</p>
            <p>Narrow down the page and click the menu icon to open the menu.</p>
        </div>
    </div>		</div>

<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://mmenujs.com/mhead/jquery.mhead.js?v=8.4.0"></script>
<script src="https://mmenujs.com/demo/js/playground.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
<script src="https://mmenujs.com/mmenu/mmenu.js?v="></script>
<script src="https://mmenujs.com/mmenu/mmenu.polyfills.js?v="></script>		<script>
    $(function() {

        new Mmenu("#menu", {
            navbars: [{
                content: [ 'searchfield' ]
            }],
            wrappers: [ 'bootstrap' ]}, {});

        $(".mh-head.Sticky").mhead({
            scroll: {
                hide: 200
            }
        });
        $(".mh-head:not(.Sticky)").mhead({
            scroll: false
        });

        $('body').on( 'click',
            'a[href^="#/"]',
            function() {
                alert( "Thank you for clicking, but that's a demo link." );
                return false;
            }
        );			});
</script>
</body>
</html>