<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <slot name="head" />
        <style>
            body {
                overflow: hidden;
            }
            .scrollable {
                overflow: auto;
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <div class="scrollable">
            <slot />
        </div>
    </body>
</html>
