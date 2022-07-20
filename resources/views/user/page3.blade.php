<html>
	<head>
		<title></title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="{{ asset('css/style_bsk.css') }}">
		<link rel="stylesheet" type="text/css" href="{{ asset('css/info_pages.css') }}">
		<link rel="stylesheet" type="text/css" href="{{ asset('css/button_basket.css')}}">
	</head>
	<body>
		<div class="CartContainer">
			<h1 class="head">Чекай заказ</h1>	
			<p class="head">Зараз зайде бармен, підніми руку з телефоном догори, 
				і він підійде до тебе.
			</p>
			<img src="{{ asset('img/page3.png') }}" class="img_page3"/>
		
			<a href="{{route('accept_page')}}"><button class="button_bsk img_page3" >Далі</button></a>
			
		
		</div>
	</body>
</html>