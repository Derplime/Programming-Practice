$("h1").text("Bye");

$("button").html("<em>Hey</em>");

$("img").attr("src", "anotherpng.png");

$("a").attr("href","http://www.bing.com");

$("h1").click(function() {
    $("h1").css("color", "blue");
});

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(e) {
    console.log(e.key);
    $("h1").text(e.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
});

$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");
