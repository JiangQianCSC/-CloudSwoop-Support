@echo off &setlocal 

:: remove CMD window
if not DEFINED IS_MINIMIZED set IS_MINIMIZED=1 && start "" /min "%~dpnx0" %* && exit

:: MS Store Installation: start MSFS with FastLaunch
cmd.exe /C start shell:AppsFolder\Microsoft.FlightSimulator_8wekyb3d8bbwe!App -FastLaunch

:: these variables will be expanded in the HTA code
:: duration and animated dots per second
set /a dur = 25
set /a adps = 3
:: width or height = 0 will set splash image to half your screen size
set /a width = 0
set /a height = 0
:: image from MSFS web site
set "imageurl=https://fsuipc.simflight.com/beta/desktop-hero_8711a4cf.jpg"
:: message displayed above image
set "waitmessage=<b>FSUIPC is preparing the cabin<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please wait</b>"

:: Variable to hold delay (in seconds) after MSFS has been started and before FSUIPC7 is started
set /a delay = 95

set "splash=%temp%\tmp.hta"
:: all lines beginning with min. 6 spaces are redirected into the HTA file
>"%splash%" (type "%~f0"|findstr /bc:"      ")
:: cmd.exe /C start mshta "%splash%"
start mshta "%splash%"

:: wait for MSFS to start
::timeout /t %delay% /nobreak > NUL

:: start FSUIPC7
::start "" "D:\FSUIPC7\FSUIPC7.exe" "-auto2"

exit
:: End Of Batch

      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <title>MSFS 2020 Splash Screen</title>

          <hta:application
           id="oHTA"
           applicationname="MSFS 2020 Splash Screen"
           border="thin"
           borderstyle="normal"
           caption="no"
           contextmenu="yes"
           icon=""
           innerborder="no"
           maximizebutton="no"
           minimizebutton="no"
           navigable="no"
           scroll="no"
           scrollflat="no"
           selection="no"
           showintaskbar="no"
           singleinstance="yes"
           sysmenu="no"
           version="1.0"
           windowstate="normal"
          />

          <style type="text/css">
            body      {margin:0px 0px 0px 0px;}
            .splashscreen {position: relative;}
            .ctext {
                    position: absolute;
                    top: 5%;
                    left: 55%;
                    text-align: left;
                    font-size: 2em;
                    font-family: "verdana";
                    color: orange;
            }
            </style>

          <script type="text/jscript">
            /* <![CDATA[ */
            
            var oWSH=new ActiveXObject("WScript.Shell");
            var i=parseInt(oWSH.ExpandEnvironmentStrings("%dur%"));
            var a=parseInt(oWSH.ExpandEnvironmentStrings("%adps%"));
            var w=parseInt(oWSH.ExpandEnvironmentStrings("%width%"));
            var h=parseInt(oWSH.ExpandEnvironmentStrings("%height%"));
            var s=oWSH.ExpandEnvironmentStrings("%imageurl%");
            var wm=oWSH.ExpandEnvironmentStrings("%waitmessage%");
            var wm1 = wm + " .  ";
            var wm2 = wm + " .. ";
            var wm3 = wm + " ...";
            if (w == 0) w = screen.width / 2;
            if (h == 0) h = screen.height / 2;
            window.resizeTo(w, h);
            window.moveTo(screen.width / 2 - w / 2, screen.height / 2 - h / 2);
            var j = n = 0;
            var m = a * i;
            var t = 1000 / a;

            function start() {
              window.focus();
              image.src = s;
              image.height = h;
              image.width = w;
              n = j % 3;
              wm = (n == 1) ? wm1 : (n == 2) ? wm2 : wm3;
              document.getElementById("msg").innerHTML = wm;
              if (j++ < m) setTimeout('start()', t);
              else window.close();
            }
            /* ]]> */
          </script>

        </head>
        <body onload="start()">
          <div class="splashscreen">
            <img id="image" src="" alt="" height="0" width="0" /> 
            <div class="ctext" id="msg"></div>
          </div>
        </body>
      </html>


