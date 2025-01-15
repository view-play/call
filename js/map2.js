$(function() {
	map();

	function map() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('map'));



		var HFData = [{
			name: '浮梁县',
			value: 2500,
			value2: Math.round(Math.random() * 100),
			value3: Math.round(Math.random() * 100)
		}, {
			name: '珠山区',
			value: Math.round(Math.random() * 100),
			value2: Math.round(Math.random() * 100),
			value3: Math.round(Math.random() * 100)
		}, {
			name: '昌江区',
			value: Math.round(Math.random() * 100),
			value2: Math.round(Math.random() * 100),
			value3: Math.round(Math.random() * 100)
		}, {
			name: '乐平市',
			value: Math.round(Math.random() * 100),
			value2: Math.round(Math.random() * 100),
			value3: Math.round(Math.random() * 100)
		}]
 



		var mapBoxOption = {
			title: {
				text: '法人基本情况',
				// subtext: '来源：big-data-view',
				// sublink: 'https://gitee.com/iGaoWei/big-data-view',
				left: 'center',
				textStyle: {
					color: '#fff'
				}
			},
			tooltip: { //鼠标hover是提示信息
				show: true, //不显示提示标签
				formatter: function(params, ticket, callback) {
					console.log("显示tooltip")
					console.log(params)
					return '法人总数：' + params.data.value +
					'</br> 税收额：'+ params.data.value2+
					'</br> 在职人员：'+ params.data.value3; //提示标签格式
				},
				backgroundColor: "rgba(0,0,0,0.8)", //提示标签背景颜色
				textStyle: {
					color: "#fff",
					fontSize: "16"
				} //提示标签字体颜色
			},
			series: [{
				type: 'map',
				color: "red",
				mapType: 'jingdezheng',
				zoom: "1.2",
				roam: "false", //是否开启缩放平移
				label: {
					normal: {
						show: true,
						textStyle: {
							color: '#00a0c9',
							fontSize:15
						}
					},
					emphasis: { // 对应的鼠标悬浮效果
						show: true,
						textStyle: {
							color: "#00a0c9"
						}
					}
				},
				itemStyle: {
					normal: {
						areaColor: 'rgba(2,37,101,.5)',
						borderColor: 'rgba(112,187,252,.5)'
					},
					emphasis: {
						areaColor: 'rgba(2,37,101,.8)'
					}
				},
				data: HFData
			}]
		};

		myChart.setOption(mapBoxOption);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

})
