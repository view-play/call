$(function() {
	var MyMarhq = '';
	clearInterval(MyMarhq);
	$('.table2 tbody').empty();
	$('.tbl-header tbody').empty();

	var str = '';
	var Items = [{
			"Ranking": "1",
			"City": "藏族",
			"SaleIncome": "2506734.43",
			"SaleRough": "296071.96",
			"SalePlan": "7200000",
			"PlanFinish": "34.82",
			"TonOilincome": "264.15",
			"OilTransform": "29.62",
			"An": "53.00",
			"Mom": "-13.00"
		},
		{
			"Ranking": "2",
			"City": "维吾尔",
			"SaleIncome": "1425935.58",
			"SaleRough": "93717.83",
			"SalePlan": "3200000",
			"PlanFinish": "44.56",
			"TonOilincome": "366.59",
			"OilTransform": "11.23",
			"An": "65.00",
			"Mom": "43.00"
		},
		{
			"Ranking": "3",
			"City": "藏族",
			"SaleIncome": "1372207.38",
			"SaleRough": "241071.82",
			"SalePlan": "3000000",
			"PlanFinish": "45.74",
			"TonOilincome": "342.32",
			"OilTransform": "6.61",
			"An": "34.00",
			"Mom": "7.00"
		},
		{
			"Ranking": "4",
			"City": "维吾尔",
			"SaleIncome": "972451.15",
			"SaleRough": "87638.60",
			"SalePlan": "2700000",
			"PlanFinish": "36.02",
			"TonOilincome": "246.03",
			"OilTransform": "11.56",
			"An": "15.00",
			"Mom": "-18.00"
		},
		{
			"Ranking": "5",
			"City": "藏族",
			"SaleIncome": "939010.52",
			"SaleRough": "140217.37",
			"SalePlan": "7200000",
			"PlanFinish": "13.04",
			"TonOilincome": "139.44",
			"OilTransform": "19.23",
			"An": "-57.00",
			"Mom": "-48.00"
		},
		{
			"Ranking": "6",
			"City": "维吾尔",
			"SaleIncome": "774274.70",
			"SaleRough": "124693.90",
			"SalePlan": "3700000",
			"PlanFinish": "20.93",
			"TonOilincome": "138.87",
			"OilTransform": "9.44",
			"An": "-20.00",
			"Mom": "-44.00"
		},
		{
			"Ranking": "7",
			"City": "藏族",
			"SaleIncome": "680456.79",
			"SaleRough": "50542.14",
			"SalePlan": "3600000",
			"PlanFinish": "18.90",
			"TonOilincome": "243.60",
			"OilTransform": "16.95",
			"An": "-29.00",
			"Mom": "-49.00"
		},
		{
			"Ranking": "8",
			"City": "维吾尔",
			"SaleIncome": "613319.87",
			"SaleRough": "176075.96",
			"SalePlan": "3000000",
			"PlanFinish": "20.44",
			"TonOilincome": "87.09",
			"OilTransform": "7.97",
			"An": "2.00",
			"Mom": "-24.00"
		},
		{
			"Ranking": "9",
			"City": "藏族",
			"SaleIncome": "596575.25",
			"SaleRough": "387024.26",
			"SalePlan": "11000000",
			"PlanFinish": "5.42",
			"TonOilincome": "93.58",
			"OilTransform": "19.06",
			"An": "35.00",
			"Mom": "6.00"
		},
		{
			"Ranking": "10",
			"City": "维吾尔",
			"SaleIncome": "589048.12",
			"SaleRough": "68966.73",
			"SalePlan": "2200000",
			"PlanFinish": "26.77",
			"TonOilincome": "193.24",
			"OilTransform": "11.29",
			"An": "30.00",
			"Mom": "-28.00"
		},
		{
			"Ranking": "11",
			"City": "藏族",
			"SaleIncome": "515448.14",
			"SaleRough": "137934.72",
			"SalePlan": "3500000",
			"PlanFinish": "14.73",
			"TonOilincome": "95.47",
			"OilTransform": "8.80",
			"An": "-48.00",
			"Mom": "-3.00"
		},
	]
	$.each(Items, function(i, item) {
		str = '<tr>' +
			'<td style="width:10%">' + item.Ranking + '</td>' +
			'<td style="width:20%">' + item.City + '</td>' +
			'<td style="width:20%">' + (+item.SaleIncome / 100).toFixed(0) + '</td>' +
			'<td style="width:20%">' + Math.abs((+item.An).toFixed(2)) + '%</td>' +
			'<td style="width:20%">' + Math.abs((+item.Mom).toFixed(2)) + '%</td>' +
			'</tr>'

		$('.table2 tbody').append(str);
		// $('.tbl-header tbody').append(str);
	});

	if (Items.length > 5) {
		$('.table2 tbody').html($('.table2 tbody').html() + $('.table2 tbody').html());
		$('.table2').css('top', '0');
		var tblTop = 0;
		var speedhq = 50; // 数值越大越慢
		var outerHeight = $('.table2 tbody').find("tr").outerHeight();

		function Marqueehq() {
			if (tblTop <= -outerHeight * Items.length) {
				tblTop = 0;
			} else {
				tblTop -= 1;
			}
			$('.table2').css('top', tblTop + 'px');
		}

		MyMarhq = setInterval(Marqueehq, speedhq);

		// 鼠标移上去取消事件
		$(".table2 tbody").hover(function() {
			clearInterval(MyMarhq);
		}, function() {
			clearInterval(MyMarhq);
			MyMarhq = setInterval(Marqueehq, speedhq);
		})

	}
})
