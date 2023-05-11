$.ajax({

        url: "./json/md.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){

            for(var i in data){

              $(".imgbox3").eq(i).find("img").attr( "src", "img/"+data[i].url); 

              $(".box3").eq(i).find("h4 > a").text(data[i].title); 

              $(".box3").eq(i).find("p").text(data[i].price); 

              $(".box3").eq(i).find("span > a").text(data[i].sale); 

            }

          }

        }

      });