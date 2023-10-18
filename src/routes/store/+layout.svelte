<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <slot name="head" />
        <style>
            body {
                -webkit-background-clip: text;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
            body {
                overflow: hidden;
            }
            .scrollable {
                overflow: auto;
                height: 100vh;
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
            }


  .scrollable::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
        </style>
    </head>
    <body>
        <div class="scrollable">
            <slot />
        </div>
    </body>
</html>
