/*1.添加事项
2.点击多选框将事件移到已完成事件或未完成事件中
3.删除事项
4.计算待完成事项数目
5.计算已完成事项数目
6.展示/隐藏待办事项
7.点击 清空事项 清空全部事项*/ 

//现在的任务是创建一个用JavaScript新的HTML标签使得我按动按钮的时候可以使得我输入框内的文本
var classnum=0

//添加代办事项
function add(s) {

        var s=document.getElementById("tododay").value;
        var CHILD1=document.createElement("li");
        var childinput=document.createElement("input");
        var childspan=document.createElement("span");
        var childselect=document.createElement("select");
        var childoption1=document.createElement("option");
        var childoption2=document.createElement("option");
        var childoption3=document.createElement("option");
        var childoption4=document.createElement("option");
        var childoption5=document.createElement("option");
        var CHILD1id = "item" + classnum;
        var childinputid= "check"+classnum;
        var childspanid="span"+classnum;
        var childselectid="select"+classnum;

        CHILD1.setAttribute("id",CHILD1id);
        childinput.setAttribute("type", "checkbox");
        childinput.setAttribute("onclick", "reduce(this.id)");
        childinput.setAttribute("id",childinputid);
        childspan.setAttribute("id",childspanid)
        childspan.setAttribute("onclick", "modify(this.id)");
        childselect.setAttribute("id",childselectid);
        childselect.setAttribute("onchange","colo(this.id)");
        
        childoption1.setAttribute("value","重要且紧急");
        
        childoption2.setAttribute("value","紧急");
        
        childoption3.setAttribute("value","重要");
    
        childoption4.setAttribute("value","不重要且不紧急");
        classnum++;
        
        



        childspan.innerHTML=s;
        childoption1.innerText="紧重"
        childoption2.innerText="紧"
        childoption3.innerText="重"
        childoption4.innerText="轻松"
        childoption5.innerText=""


        CHILD1.appendChild(childspan);
        CHILD1.appendChild(childinput);
        childselect.appendChild(childoption5);
        childselect.appendChild(childoption1);
        childselect.appendChild(childoption2);
        childselect.appendChild(childoption3);
        childselect.appendChild(childoption4);
        CHILD1.appendChild(childselect);


      
        document.getElementById("todoooo").appendChild(CHILD1);
         
      document.getElementById("tododay").value="";

}
//删除代办事项
function reduce(id) { 
     var  p=document.getElementById(id).parentNode;
     var  t=document.getElementById(id).parentNode.childNodes[0];
     var  reduspan=document.createElement("span");
     var  reduli=document.createElement("li")
     var  reduliid = "item" + classnum;
     var  reduspanid="span"+classnum;


     var  s=t.innerHTML;
     reduli.setAttribute("id",reduliid);
     reduspan.className="reduli";
     reduspan.setAttribute("id",reduspanid)
     reduspan.setAttribute("onclick", "repair(this.id)");
     classnum++;

     reduspan.innerHTML=s;
     reduli.appendChild(reduspan);

     document.getElementById("totaldone").appendChild( reduli);
     document.getElementById("todoooo").removeChild(p);
  }

//修改代办事项
function modify(id) {
  var  p=document.getElementById(id);
 var childinput=document.createElement("input");
  var childinputid= "check"+classnum;
  classnum++;

  childinput.setAttribute("type", "checkbox");
  childinput.setAttribute("onclick", "reduce(this.id)");
  childinput.setAttribute("id",childinputid);
  var  f=prompt("请输入修改内容","");
  p.innerText=f;
}
//标记事件的重要性；
function colo(id) {

  if (document.getElementById(id).value=="重要且紧急") {
    var  p=document.getElementById(id).parentNode;
    p.className="imandur"
    
  }
  if (document.getElementById(id).value=="紧急") {
    var  p=document.getElementById(id).parentNode;
    p.className="ur"
    
  }
  if (document.getElementById(id).value=="重要") {
    var  p=document.getElementById(id).parentNode;
    p.className="im"
    
  }
  if (document.getElementById(id).value=="不重要且不紧急") {
    var  p=document.getElementById(id).parentNode;
    p.className="notimandur"
    
  }
}

function repair(id) {
  var  p=document.getElementById(id).parentNode;
  var  t=p.childNodes[0];
  var  a=t.innerText;
  add( document.getElementById("tododay").value=a );
  document.getElementById("totaldone").removeChild(p);
}
