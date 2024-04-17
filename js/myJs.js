const textConfig = {
  text1: "Hello pé!",
  text2: "Anh Muốn Hỏi Pé Một Câu Hỏi <3",
  text3: "Pé Có Thích Anh Không ._.",
  text4: "Nếu pé ko trả lời mà thoát ra tức là muốn làm ny a rùi đó nha :v",
  text5: "Mơ à ???",
  text6: "Tất Nhiên Là Có rùiii<3",
  text7: "Lí do pé thích a là gì zạ :vvvv",
  text8: "Gửi cho a <3",
  text9: "Vì anh thích pé mất rồi",
  text10: "Anh biết mà, hihi ^^",
  text11:
    "Em đồng ý làm người iu anh nhaaa 🥰",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/4FFA2FEE-28DB-49E0-B606-30DF96637417.jpeg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/7720A0CE-FC26-49CB-9898-F983140C8918.jpeg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    // var audio = new Audio("sound/tick.mp3");
    // audio.play();
    // Swal.fire({
    //   title: textConfig.text7,
    //   html: true,
    //   width: 900,
    //   padding: "3em",
    //   html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
    //   background: '#fff url("img/7720A0CE-FC26-49CB-9898-F983140C8918.jpeg")',
    //   backdrop: `
    //                 rgba(0,0,123,0.4)
    //                 url("img/none.gif")
    //                 left top
    //                 no-repeat
    //               `,
    //   showCancelButton: false,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonColor: "#fe8a71",
    //   cancelButtonColor: "#f6cd61",
    //   confirmButtonText: textConfig.text6,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/7720A0CE-FC26-49CB-9898-F983140C8918.jpeg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://walle79.github.io/my-flower/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
