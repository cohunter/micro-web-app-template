# micro-web-app-template

The contents of the `src` folder are the minimal template/demo.

It can be uploaded, edited and run with no build step.

In Chrome on Android and Windows, this triggers the native installation prompt.

Also triggers the install prompt in Brave on macOS.

## Try it out

This works with cohunter/web-app-https-starter, you can get a live URL for testing with valid HTTPS with just two commands:

````
git clone https://github.com/cohunter/micro-web-app-template
docker run -it --rm -v `pwd`/micro-web-app-template/src:/www 
````

## Screenshots

### Installed on macOS
![installed on macOS](https://user-images.githubusercontent.com/35784270/115793075-5c067300-a380-11eb-883f-26d408576c0b.png)

### Android Native "Add to Home screen" prompt
![Android install prompt](https://user-images.githubusercontent.com/35784270/115793349-d3d49d80-a380-11eb-8fcc-b50f25ff8f11.png)
