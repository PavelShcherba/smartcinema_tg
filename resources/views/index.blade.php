<html>
    <head>
        <title>Selector</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('css/button.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('css/select.css') }}" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="{{ asset('js/FastActive.min.js') }}" type="text/javascript"></script>

        <script src="{{ asset('js/selector.js') }}" type="text/javascript"></script>
    </head>
    <body>
        <div class="conteiner">
            @foreach($products as $product)
            <div class="wrapper">
                
                <div class="cell_one">
                    <div class="info">
                        <img src="img/IMG_0282.png" />
                        <p class="main_text">Попкорн Солоний</p>
                        <div class="select">
                            <input class="select__input" type="hidden" name="">
                            <div class="select__head">Виберiть</div>
                            <ul class="select__list" style="display: none;">
                                <li class="select__item">0.65Л</li>
                                <li class="select__item">2.5Л</li>
                                <li class="select__item">3Л</li>
                            </ul>
                        </div>
                        <p class="secondary_text">Ціна: 70 грн.</p>
                    </div>
                    <div class="button">
                        <button class="btn btn-secondary">
                            <a href="">Додати до замовлення</a>
                        </button>
                    </div>
                </div>                
            </div>
            @endforeach
    </body>
</html>