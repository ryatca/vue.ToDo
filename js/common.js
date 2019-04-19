$(function(){
	//TimeStamp用の関数
	function TimeStamp(){
		date = new Date();
		Y = date.getYear()+1900;
		m = date.getMonth()+1;
		d = date.getDate();
		H = date.getHours();
		i = date.getMinutes();
		s = date.getSeconds();
		// Y/m/d H:i:s
		var time = Y+'/'+m+'/'+d+' '+H+':'+i+':'+s;
		return time;
	}


	//初回起動ではlocalStorageがなくエラーになってしまうので回避用のコード
	var data = [];
	var localdata = JSON.parse(localStorage.getItem('list'));
	if(localdata){
		data = localdata;
	}

	//#app下の操作
	var app = new Vue({
		el:'#app',
		data:{
			title:'Hello ToDo List!',
			todo:'ToDo',
			add:'追加',
			task:'',
			list:data
		},
		methods:{
			todoadd:function(){
				if(app.task != ''){

					app.list.push({
						name:app.task,
						time:TimeStamp()
					});

					app.task = '';
					localStorage.setItem('list',JSON.stringify(app.list));
				}
			},
			tododelete:function(todo){
				this.list.splice(todo,1);
				localStorage.setItem('list',JSON.stringify(app.list));
			},
		}
	});
})