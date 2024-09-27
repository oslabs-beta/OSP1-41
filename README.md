![kubeready](https://github.com/oslabs-beta/kubeready/assets/133065870/945e8dc5-6d2c-42e5-b93f-64271ff79548)

# Technology Stack 
<div align="center">
  <img src='https://img.shields.io/badge/node-red?style=for-the-badge&logo=nodedotjs&logoColor=white&color=green'/>
  <img src='https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&logoColor=white&color=yellow'/>
  <img src='https://img.shields.io/badge/react-js?style=for-the-badge&logo=react&logoColor=white&color=black'/>
  <img src='https://img.shields.io/badge/react%20router-red?style=for-the-badge&logo=reactrouter&logoColor=white&color=rgb(255%2C%2025%2C%2025)'/>
  <img src='https://img.shields.io/badge/Kubernetes-green?style=for-the-badge&logo=kubernetes&logoColor=white&color=blue'>
  <img src='https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker&logoColor=white&color=rgb(57%2C%20199%2C%20204)'/>
  <img src='https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white&color=black)
  <img src='https://img.shields.io/badge/React%20Router-red?style=for-the-badge&logo=reactrouter&logoColor=white&color=red'/>
  <img src='https://img.shields.io/badge/Jest-purple?style=for-the-badge&logo=jest'/>
  <br>
  <img src='https://img.shields.io/badge/SASS-gold?style=for-the-badge&logo=sass'/>
  <img src='https://img.shields.io/badge/Prometheus-orange?style=for-the-badge&logo=prometheus&logoColor=white'/>
  <img src="https://img.shields.io/badge/PromQL-black?style=for-the-badge&logo=prometheus&logoColor=white">
  <img src='https://img.shields.io/badge/Grafana-black?style=for-the-badge&logo=grafana&logoColor=orange'/>
  <img src='https://img.shields.io/badge/Helm-blue?style=for-the-badge&logo=helm&logoColor=white'/>
  <img src="https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/brcypt-blue?style=for-the-badge&color=purple">
</div>

# Introduction
For those experienced with the Kubernetes environment, the intricacies of monitoring cluster health are well understood. Navigating the complexities inherent in visualizing a cluster is a challenge that necessitates attention to a multitude of factors. The challenge lies in discerning which metrics hold critical significance and which ones might be relegated to a less prominent role. Get ready to be ready with kubeready! With our tool, visualizing kubernetes metrics from any local cluster becomes simple. Crafted with a developer-centric approach, kubeready boasts a user-friendly platform, delivering real-time metric visualization. By offering an instantaneous display of these metrics, kubeready empowers developers to promptly address performance issues as they emerge, significantly elevating their responsiveness and efficacy in tackling such challenges.

# Features
## User-facing features
The kubeready tool is designed to streamline and enhance your experience with Kubernetes cluster management, monitoring, and analysis. kubeready was built with comprehensive pre-built metrics, automated dependency installation, seamless Grafana and Prometheus integration, custom dashboard generation, password encryption, and a comprehensive developer-side testing suite. 
* Connect your Kubernetes clusters to pre-built metrics, allowing you to visualize detailed CPU, Memory, Network, and Disk metrics.
* Automated dependency installation, running commands upon account creation to connect Helm charts and custom Grafana configurations.
* Automated Grafana dashboard creation, rendering a new dashboard specific to the user's machine.
* Automated connection to Prometheus, scraping metrics more quickly without additional user setup. 
* Security is a top priority in any Kubernetes environment. kubeready provides password encryption through bcrypt. 
## Developer-facing features
* Test-driven development: kubeready's comprehensive testing suite (using Jest and React Testing Library) enables future developers to assess code functionality throughout the frontend and backend of the application.

# Requirements
Please free up the following ports:
Technology  | Port Number
------------- | -------------
Grafana  | 3000
server | 3001
kubeready  | 8080

# Installation/Getting Started
## To start a new Kubernetes cluster
1. Install [Docker](https://www.docker.com/products/docker-desktop/) on your OS so a container can be spun up.
2. Begin running a minikube to create a kubernetes cluster by running the command
```
minikube start
```
## To run kubeready
1. Install [Helm](https://helm.sh/docs/intro/install/).
2. Clone this respository onto your local machine.
3. Run the following commands in your local repository directory.

```
npm install
```
```
npm run build
```
```
npm run start
```
4. Open localhost:3001
```
https://localhost:3001/
```
5. Create an account or sign in.
![LoginToDashboardGif](https://github.com/oslabs-beta/kubeready/blob/njpallivathucal-readMe/kubeready%20login%20gif.gif?raw=true)
![SignUpGif](https://github.com/oslabs-beta/kubeready/blob/njpallivathucal-readMe/kubeready%20signup.gif?raw=true)

# RoadMap Regarding Present/Future Considerations
💯 = Ready to use<br>
👨‍💻 = In progress<br>
🙏🏻 = Looking for contributors<br>
Feature  | Status
------------- | -------------
Seamless grafana integration | 💯
Seamless prometheus integration | 💯
Password encryption | 💯
Addition of testing suite | 💯
Custom dashboard creation and render | 💯
Automate login proccess using CLI for grafana | 👨‍💻
Implement typescript conversion | 🙏🏻
Add functionality to monitor health of invididual pods | 🙏🏻
Add an overall health score for each metric to allow for more immediate response by developer when metric dips to critical level | 🙏🏻
Implement typescript conversion for codebase | 🙏🏻
Addition of a notification/alert system when metrics dip to critical | 🙏🏻

# Publications
Read our Medium Article [Here](https://medium.com/@kubeready/introducing-kubeready-ea51e8e705ee)!

# Meet the Team
<table>
  <tr>
    <td>
      Alana Herlands<br><a href="https://github.com/alanaherlands">GitHub</a> | <a href="https://www.linkedin.com/in/alanaherlands/">LinkedIn</a><br>Software Engineer
    </td>
    <td>
      Diane Moon<br><a href="https://github.com/dianemoon">GitHub</a> | <a href="https://www.linkedin.com/in/dianejmoon/">LinkedIn</a><br>Software Engineer
    </td>
    <td>
      Serena Romano<br><a href="https://github.com/serenahromano">GitHub</a> | <a href="https://www.linkedin.com/in/srom1/">LinkedIn</a><br>Software Engineer
    </td>
    <td>
      Alvin Cheung<br><a href="https://github.com/alvin-cheung">GitHub</a> | <a href="https://www.linkedin.com/in/alvin-cy-cheung/">LinkedIn</a><br>Software Engineer
    </td>
    <td>
      Noel Pallivathucal<br><a href="https://github.com/njpallivathucal">GitHub</a> | <a href="https://www.linkedin.com/in/njpallivathucal/">LinkedIn</a><br>Software Engineer
    </td>
  </tr>
</table>
