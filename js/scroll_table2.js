$(function() {
	var MyMarhq = '';
	clearInterval(MyMarhq);
	$('.table2 tbody').empty();
	$('.tbl-header tbody').empty();

	var str = '';
	var Items = [{
			"Ranking": "1",
			"City": "批发和零售业",
			"SaleIncome": "25067",
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
			"City": "住宿和餐饮业",
			"SaleIncome": "1425",
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
			"City": "陶瓷行业",
			"SaleIncome": "13780",
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
			"City": "租赁和商务行业",
			"SaleIncome": "972",
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
			"City": "科学研究和技术服务业",
			"SaleIncome": "939",
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
			"City": "居家服务、修理和其他服务业",
			"SaleIncome": "77",
			"SaleRough": "124693.90",
			"SalePlan": "3700000",
			"PlanFinish": "20.93",
			"TonOilincome": "138.87",
			"OilTransform": "9.44",
			"An": "-20.00",
			"Mom": "-44.00"
		},
	]
	$.each(Items, function(i, item) {
		str = '<tr>' +
			'<td style="width:10%">' + item.Ranking + '</td>' +
			'<td style="width:60%">' + item.City + '</td>' +
			'<td style="width:20%">' + item.SaleIncome + '</td>' +
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
