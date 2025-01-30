# Thryv_lab02

Error1: el comando openssl no funciona en la terminal de vs code porque esta usa el PATH 
de windows, al openssl no estar configurado en el PATH de windows da error.

La manera de solucionarlo es agregar openssl al PATH de windows o usar una terminal
que venga con openssl en su PATH ya como Git bash, consolas de comandos bash en general.

Error2: el middleware no removía la palabra Bearer del jwt cuando se intentaba ir a la ruta privada dashboard.

La solución es romover la palabra Bearer del token antes de verificarlo.