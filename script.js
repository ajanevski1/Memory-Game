$(function () {

    $(".card:odd").addClass("border");
    $(".card > span").addClass("hidden");
    $(".card").addClass("hide");

    var zbor = ["jas","jas","ti","ti","toj","toj","taa","taa","da","da","ne","ne","site","site","nikoj","nikoj"];
    for(var i=0;i<16;i++){
        var j = Math.floor(Math.random()*16);
        console.log(j);

        var t = zbor[i];
        console.log("t: "+ t);

        zbor[i] = zbor[j];
        zbor[j] = t;
    }    

    for(var i=0;i<16;i++){
        $("#"+(i+1)).text(zbor[i]);
    }

    console.log(zbor);

    zadacha();

    function zadacha() {
        var a = [];
        var b = [];
        var c = [];
        var z = 0;
        var w = 0;
        var rez = $("#rezultat");


        $(".card").click(function () {
            $("span", this).removeClass("hidden");
            a[z] = $("span", this).text();
            b[z] = $("span", this);
            c[z] = $(this);
            z++;

            if (z == 2) {
                compare(a[0], a[1]);
                z = 0;
            }

        })
        function compare(x, y) {
            if (x == y) {
                console.log("ednakvi");
                c[0].addClass("green").removeClass("hide");
                c[1].addClass("green").removeClass("hide");
                w++;


            }
            else {

                console.log("ne");
                setTimeout(function () {
                    rez.text("ne");
                    rez.addClass("no");

                        setTimeout(function () {
                            rez.text("");
                            rez.removeClass("no");
                        }, 1000)

                    b[0].addClass("hidden");
                    b[1].addClass("hidden");
                }, 500)
            }

            if (w == 8) {
                setTimeout(function () {
                    rez.addClass("win");
                    rez.text("Pobeda!!!");
                }, 1000)
            }

        }

    }

})