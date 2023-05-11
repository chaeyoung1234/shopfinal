$(function(){
  
  $.ajax({

        url: "./json/new.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){



            for(var i in data){

              $(".imgbox2").eq(i).find("img").attr("src", "img/"+data[i].url);

              $(".box2").eq(i).find("h4").children().text(data[i].title); 

              $(".box2").eq(i).find("p").text(data[i].text);                            

              $(".box2").eq(i).find(".a").text(data[i].price);

              $(".box2").eq(i).find(".b").text(data[i].sale);



            }

          }

        }

      })

    });