<head>
    <meta charset="utf-8" />
    <meta name="author" content="www.frebsite.nl" />
    <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=yes" />

    <link rel="stylesheet" href="../cdn/bootstrap.min.css">
    <link rel="stylesheet" href="<?=APP_ROOT?>dist/app.css?v=<?=time()?>">

    <title>mmenu - Demo 2</title>


    <style>
        .mm-menu {
            --mm-color-background: linear-gradient(135deg, #f99 10%,#c6f 90%);
            --mm-color-text: #fff;
        }
        .mm-navbars_top
        {
            background: rgba( 255, 255, 255, 0.15 );
            border-bottom: none;
            transform: translateY(-100%);
            transition: transform 0.3s ease 0.3s;
        }
        .mm-wrapper_opening .mm-navbars_top
        {
            transform: translateY(0%);
        }
        .mm-navbar,
        .mm-panels,
        .mm-panels > .mm-panel  {
            background: none !important;
        }

        .mm-navbar .mm-btn_prev {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            width: 40px;
        }

        .mm-searchfield {
            height: 60px;
            padding: 0 0 0 20px;
            position: relative;
        }
        .mm-searchfield__input {
            padding-left: 10px !important;
        }

        .mm-searchfield input {
            background: none !important;
            border-radius: 0 !important;
            color: #fff !important;
            height: 45px;
        }

        .mm-panels > .mm-panel {
            padding-top: 20px;
        }
        .mm-listitem > a,
        .mm-listitem > span {
            font-size: 16px;
            padding: 15px 10px 15px 40px;
        }

        .mm-divider {
            padding-left: 40px;
            background: transparent;
        }
    </style>	</head>