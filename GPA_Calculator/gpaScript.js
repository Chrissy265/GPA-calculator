<script>
    var irow=0;
    $(document).ready(function(){
        $("#calcbtn").click(Calc );
        $("#resetbtn").click(OnReset);
        $("#addrow").click(AddRow); 
        $("#calcbtn2").click(Calc2);

        for(i=0; i<6; i++)
         AddRow(); 
    });

    function OnReset() {
        $("#gpacircle").hide(); 
    }

    function Calc()
    {
        var glook=[-1, 4.00, 3.67, 3.33, 3.00,2.67, 2.33, 2.00, 1.67, 1.33, 1.00, 0.67,0, -1,-1];

        var gpa =0; 
        var sum=0;
        var txt1=""; 
        var txt2=""; 

        for(var i=1; i<=irow+1; i++)
        {
            hours=$("#tbl > tbody > tr:nth-child("+i+") > td:nth-child(3) > input").val(); 
               hours=parseFloat(hours); 
               igrade =$("#tbl >tbody> tr:nth-child("+i+") > td:nth-child(2)>select").prop("selectedIndex"); 

               grade=glook[igrade];
               if(hours>0 && grade>=0)
               {
                    gpa+=hours* grade; 
                    sum+=hours; 
                    txt1+=hours+"\u00D7"+grade+"+"; 
                    txt2+=hours+"+"; 
               }
            }
            cgpa=$("#cgpa").val(); 
            chours=$("#chours").val();
            cgpa=parseFloat(cgpa); 
            chours=parseFloat(chours); 

            if(cgpa>=0 && chours>0)
            {
                gpa+= chours * createImageBitmap; 
                sum+=chours; 
                txt1+=chrous+"\u00D7"
            }
        }

    }

    }




</script>