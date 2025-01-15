$(window).load(function() {
	$(".loading").fadeOut()
})
$(function() {
	var charts = [];
	var chartIndex = 0;
	// echarts_1();
	echarts_4()
	echarts_31()

	function echarts_1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart1'));
		var data = [{
				title: '**省'
			},
			['年龄分布'],
			[{
				name: '20以下',
				max: 150
			}, {
				name: '20-30',
				max: 150
			}, {
				name: '30-40',
				max: 150
			}, {
				name: '40-50',
				max: 150
			}, {
				name: '50以上',
				max: 150
			}],
			[43, 100, 28, 3, 150],
		]
		option = {

			color: ['#9DD060', '#35C96E', '#4DCEF8'],

			tooltip: {},

			radar: {
				center: ['50%', '50%'],
				radius: ["25%", "70%"],

				name: {
					textStyle: {
						color: '#72ACD1'
					}
				},

				splitLine: {

					lineStyle: {

						color: 'rgba(255,255,255,.0',

						width: 2

					}

				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,0.2)',
						width: 1,
						type: 'dotted'

					},

				},
				splitArea: {
					areaStyle: {
						color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
					}
				},
				indicator: data[2]
			},
			series: [{
				name: '',
				type: 'radar',
				data: [{
						areaStyle: {
							normal: {
								opacity: 0.3,
							}
						},
						value: data[3],
						name: data[1][0]
					},
					{
						areaStyle: {
							normal: {
								opacity: 0.3,
							}
						},
						value: data[4],
						name: data[1][1]
					},
					{
						areaStyle: {
							normal: {
								opacity: 0.3,
							}
						},
						value: data[5],
						name: data[1][2]
					}
				]
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
		refreshData(myChart);
	}

	function echarts_4() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart4'));
		var myChart2 = echarts.init(document.getElementById('echart3'));
		var myChart3 = echarts.init(document.getElementById('echart10'));

		option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['法人数'],

				top: '2%',
				textStyle: {
					color: "rgba(255,255,255,.5)",
					fontSize: '12',

				},
				itemWidth: 12,
				itemHeight: 12,
				itemGap: 35
			},
			grid: {
				left: '0%',
				top: '40px',
				right: '0%',
				bottom: '0%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},

				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:50,
					show: true,
					splitNumber: 15,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [ {
				type: 'value',
				name: "个",
				nameTextStyle: { //坐标轴名称样式
					color: "#fff",
					fontSize: "14",
					backgroundColor: "" //文字块背景色
				},
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '14',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
				name: '法人数',
				type: 'bar',
				yAxisIndex: 0,
				data: [2, 3, 3, 9, 15, 12, 6, 4, 6, 3, 12, 3],
				barWidth: '20%', //柱子宽度
				// barGap: 1, //柱子之间间距
				itemStyle: {
					normal: {
						color: '#2f89cf',
						opacity: 1,
						barBorderRadius: 5,
					}
				}
			}]
		};
		option2 = {
			//  backgroundColor: '#00265f',
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['法人数',],
				top: '5%',
				textStyle: {
					color: "#fff",
					fontSize: '12',
				},

				itemGap: 35
			},
			grid: {
				left: '0%',
				top: '40px',
				right: '0%',
				bottom: '0',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},
				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:50,
					show: true,
					splitNumber: 5,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
				name: '法人数',
				type: 'line',
				// smooth: true,
				data: [2, 6, 3, 8, 5, 8, 3, 5, 23, 13, 21, 21],

				itemStyle: {
					normal: {
						color: '#2f89cf',
						opacity: 1,

						barBorderRadius: 5,
					}
				}
			}]
		};
		
		var option3 = {
			//  backgroundColor: '#00265f',
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['法人注销数','法人新增数'],
				top: '5%',
				textStyle: {
					color: "#fff",
					fontSize: '12',
				},

				itemGap: 35
			},
			grid: {
				left: '0%',
				top: '40px',
				right: '0%',
				bottom: '0',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},
				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:50,
					show: true,
					splitNumber: 5,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
				name: '法人注销数',
				type: 'line',
				smooth: true,
				data: [2, 6, 3, 8, 5, 8, 3, 5, 23, 13, 21, 21],

				itemStyle: {
					normal: {
						color: '#2f89cf',
						opacity: 1,

						barBorderRadius: 5,
					}
				}
			},{
				
					name: '法人新增数',
					type: 'line',
					smooth: true,
					data: [ 6, 3,  7,  9, 5, 3, 13, 21,4,4,2,3],
				
					itemStyle: {
						normal: {
							color: '#e0c828',
							opacity: 1,
				
							barBorderRadius: 5,
						}
					}
				
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option2);
		myChart2.setOption(option);
		myChart3.setOption(option3);
		window.addEventListener("resize", function() {
			myChart.resize();
			myChart2.resize();
			myChart3.resize();
		});
		refreshData(myChart)
		refreshData(myChart2)
		refreshData(myChart3)
	}


	function refreshData(chart) {
		if (!chart) {
			return;
		}
		console.log(charts);
		charts.push(chart);
	}

	setInterval(function() {
		if (chartIndex == charts.length) {
			chartIndex = 0;
		}
		var chart = charts[chartIndex];
		var option = chart.getOption();
		chart.clear();
		chart.setOption(option);
		chartIndex++;
	}, 3000)

	function echarts_31() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('fb01'));
		var myChart2 = echarts.init(document.getElementById('fb02'));
		var myChart3 = echarts.init(document.getElementById('fb03'));
		var myChart4 = echarts.init(document.getElementById('fb04'));
		var myChart5 = echarts.init(document.getElementById('myd1'));

		var myChart7 = echarts.init(document.getElementById('sysx'));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)",
				position: function(p) { //其中p为当前鼠标的位置
					return [p[0] + 10, p[1] - 10];
				}
			},
			legend: {
				orient: 'vertical',
				top: '35%',
				right: 40,
				itemWidth: 10,
				itemHeight: 10,
				data: ['企业', '个体工商'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12',
				}
			},
			series: [{
				name: '机构分布',
				type: 'pie',
				center: ['35%', '50%'],
				radius: ['55%', '65%'],
				color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [

					{
						value: 8124,
						name: '企业'
					},
					{
						value: 21222,
						name: '个体工商'
					}
				]
			}]
		};
		option2 = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)",
				position: function(p) { //其中p为当前鼠标的位置
					return [p[0] + 10, p[1] - 10];
				}
			},
			legend: {
				orient: 'vertical',
				top: '25%',
				right: '8%',
				itemWidth: 10,
				itemHeight: 10,
				data: ['博士', '硕士', '本科', '专科'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12',
				}
			},
			series: [{
				name: '学历构成',
				type: 'pie',
				center: ['40%', '50%'],
				radius: ['40%', '50%'],
				color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [{
						value: 10,
						name: '博士'
					},
					{
						value: 20,
						name: '硕士'
					},
					{
						value: 30,
						name: '本科'
					},
					{
						value: 40,
						name: '专科'
					},

				]
			}]
		};
		option3 = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)",
				position: function(p) { //其中p为当前鼠标的位置
					return [p[0] + 10, p[1] - 10];
				}
			},
			legend: {
				orient: 'vertical',
				top: 'center',
				right: 0,
				itemWidth: 10,
				itemHeight: 10,
				data: ['男性', '女性'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12',
				}
			},
			series: [{
				name: '年龄分布',
				type: 'pie',
				center: ['35%', '50%'],
				radius: ['40%', '50%'],
				color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [

					{
						value: 542634,
						name: '男性'
					},
					{
						value: 654235,
						name: '女性'
					}
				]
			}]
		};
		option4 = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)",
				position: function(p) { //其中p为当前鼠标的位置
					return [p[0] + 10, p[1] - 10];
				}
			},
			legend: {
				orient: 'vertical',
				top: 'center',
				right: '8%',
				itemWidth: 10,
				itemHeight: 10,
				data: ['初中以下', '初中', '高中', '大专', '本科', '研究生'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12',
				}
			},
			series: [{
				name: '学历分布',
				type: 'pie',
				center: ['40%', '50%'],
				radius: ['40%', '50%'],
				color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [{
						value: 126510,
						name: '初中以下'
					},
					{
						value: 212350,
						name: '初中'
					},
					{
						value: 126430,
						name: '高中'
					},
					{
						value: 423640,
						name: '大专'
					},
					{
						value: 232650,
						name: '本科'
					},
					{
						value: 35560,
						name: '研究生'
					},
				]
			}]
		};
		option5 = {
			grid: {
				left: '0',
				right: '0',
				top: '10%',
				bottom: '24%',
				//containLabel: true
			},
			legend: {
				data: ['500万以上', '500万以下', '注册总额'],
				bottom: 0,
				itemWidth: 10,
				itemHeight: 10,
				textStyle: {
					color: "#fff",
					fontSize: '10',

				},

				itemGap: 5
			},
			tooltip: {
				show: "true",
				trigger: 'item'
			},
			yAxis: {
				type: 'value',
				show: false,
			},
			xAxis: [{
					type: 'category',
					axisTick: {
						show: false
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#363e83',
						}
					},
					axisLabel: {
						show: false,
						//   inside: true,
						textStyle: {
							color: "rgba(255,255,255,1)",
							fontWeight: 'normal',
							fontSize: '12',
						},
						// formatter:function(val){
						//     return val.split("").join("\n")
						// },
					},
					data: [] 
				}

			],
			series: [{
					name: '500万以上',
					type: 'bar',
					barWidth: '20',

					itemStyle: {
						normal: {
							show: true,
							color: '#20aa92',
							barBorderRadius: 50,
							borderWidth: 0,
						}
					},
					zlevel: 2,
					barGap: '100%',
					data: [5110],
					label: {
						formatter: "{c}个",
						show: true,
						position: 'top',
						textStyle: {
							fontSize: 12,
							color: 'rgba(255,255,255,.6)',
						}
					},
				},
				{
					name: '500万以下',
					type: 'bar',
					itemStyle: {
						normal: {
							show: true,
							color: '#f4664e',
							barBorderRadius: 50,
							borderWidth: 0,
						}
					},
					zlevel: 2,
					barWidth: '20',
					data: [4220],
					label: {
						formatter: "{c}个",
						show: true,
						position: 'top',
						textStyle: {
							fontSize: 12,
							color: 'rgba(255,255,255,.6)',
						}
					},
				},
				{
					name: '注册总额',
					type: 'bar',
					itemStyle: {
						normal: {
							show: true,
							color: '#0c93dc',
							barBorderRadius: 50,
							borderWidth: 0,
						}
					},
					zlevel: 2,
					barWidth: '20',
					data: [6407],
					label: {
						formatter: "{c}万元",
						show: true,
						position: 'top',
						textStyle: {
							fontSize: 12,
							color: 'rgba(255,255,255,.6)',
						}
					},
				},

			]
		};

		option7 = {
			//  backgroundColor: '#00265f',
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '30px',
				right: '0%',
				bottom: '0',
				containLabel: true
			},
			legend: {
				data: ['法人总数', '税收总额',],
				top: 0,
				itemWidth: 10,
				itemHeight: 10,
				textStyle: {
					color: "#fff",
					fontSize: '10',
			
				},
			
				itemGap: 5
			},
			xAxis: [{
				type: 'category',
				data: ['昌江区', '珠山区', '浮梁县', '乐平市', '昌南新区', '高新区'],
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},
				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:50,
					show: true,
					splitNumber: 5,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
				type: 'value',
				name: "人",
				nameTextStyle: { //坐标轴名称样式
					color: "#fff",
					fontSize: "14",
					backgroundColor: "" //文字块背景色
				},
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			},{
				type: 'value',
				name: "亿元",
				nameTextStyle: { //坐标轴名称样式
					color: "#fff",
					fontSize: "14",
					backgroundColor: "" //文字块背景色
				},
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
					name: '法人总数',
					type: 'bar',
					smooth: true,
					data: [2, 6, 3, 8, 5, 8, ],
					yAxisIndex: 0,
					itemStyle: {
						normal: {
							color: '#2f89cf',
							opacity: 1,

							barBorderRadius: 5,
						}
					}
				},
				{
					name: '税收总额',
					type: 'bar',
					smooth: true,
					data: [8, 8, 5, 8, 2, 6,],
					yAxisIndex: 1,
					itemStyle: {
						normal: {
							color: '#78c799',
							opacity: 1,
							barBorderRadius: 5,
						}
					}
				}
			]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		myChart2.setOption(option2);
		myChart3.setOption(option3);
		myChart4.setOption(option4);
		myChart5.setOption(option5);

		myChart7.setOption(option7);
		// 暂不刷新
		refreshData(myChart)
		// refreshData(myChart2)
		// refreshData(myChart3)
		// refreshData(myChart4)
		refreshData(myChart5)
		refreshData(myChart7)
		window.addEventListener("resize", function() {
			myChart.resize();
			myChart7.resize();
			myChart2.resize();
			myChart3.resize();
			myChart4.resize();
			myChart5.resize();

		});
	}
})
