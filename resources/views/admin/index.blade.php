<html lang="en" >
    <head>
        <meta charset="UTF-8">
            <title>Выдача на баре</title>
            <link rel="stylesheet" href="{{asset('css/admin/style.css')}}">
                <title>CodePen - Responsive &amp; Accessible Data Table</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
                <meta name="viewport" content="width=device-width"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
                        <link rel="stylesheet" href="{{asset('css/admin/table.css')}}">
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
                            </head>
                            <body>
                                <div class="pie pie1" onclick="document.body.classList.remove('active')">
                                    <a href="{{route('hole')}}">
                                        <div class="pie-color pie-color1">
                                            <img class="card" src="{{asset('img/admin/take_away.png')}}" />
                                        </div>
                                    </a>
                                </div>
                                <div class="pie pie2" onclick="document.body.classList.remove('active')">
                                    <a href="">
                                        <div class="pie-color pie-color2">
                                            <img class="discount" src="{{asset('img/admin/delivery-man.png')}}" />
                                        </div>
                                    </a>
                                </div>
                                <div class="pie pie3" onclick="document.body.classList.remove('active')">
                                    <a href="">
                                        <div class="pie-color pie-color3">
                                            <img class="archive" src="{{asset('img/admin/zip.png')}}" />
                                        </div>
                                    </a>
                                </div>
                                <div class="menu" onclick="document.body.classList.toggle('active')">
                                    <svg class="hamburger" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                                        <g
                                            fill="none"
                                            stroke="#000"
                                            stroke-width="7.999"
                                            stroke-linecap="round"
                                            >
                                            <path d="M 55,26.000284 L 24.056276,25.999716" />
                                            <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                                            <path d="M 45,73.999716 L 75.943724,74.000284" />
                                            <path d="M 75.943724,26.000284 L 45,25.999716" />
                                            <path d="M 24.056276,73.999716 L 55,74.000284" />
                                        </g>
                                    </svg>
                                </div>
                                <br />
                                <br />
                                <br />
                                <div class="container">
                                    <table class="responsive-table">
                                        <caption>Выдача на баре</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">Дата</th>
                                                <th scope="col">ID</th>
                                                <th scope="col">Наименование товара</th>
                                                <th scope="col">Цена</th>
                                                <th scope="col">Номер зала</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($orders as $order)
                                            <tr>
                                                <td scope="row">{{ $order->created_at }}</td>
                                                <td data-title="ID">{{$order->order_id}}</td>
                                                <td data-title="list_order">
                                                    @foreach($order->product_volumes as $p)
                                                    <ul>
                                                        <li>{{ $p->product->title }}
                                                            @if($p->volume),
                                                            {{ $p->volume->value }}л@endif,
                                                            {{ $p->qty }}шт
                                                        </li>
                                                    </ul>
                                                    @endforeach
                                                </td>
                                                <td data-title="value" data-type="currency">{{$order->total}}</td>
                                                <td data-title="num" data-type="currency"> <h1>-</h1> </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
                            </body>
                            </html>