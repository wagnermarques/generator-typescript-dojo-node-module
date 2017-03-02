//https://github.com/dojo/typings/blob/master/examples/lang/src/main.ts
import {IUpdatable,GitHubProject} from "./model/github-project-hupdate-domain-model"
//import * as lang from 'dojo/_base/lang';

let project: GitHubProject = {

    owner : 'SolucoesemTI',
    projectName : 'sismerenda',
    lastUpdateDateTime : null,
    checkUpdateAtStartUp:true,
    getUpdatesDateHystory:null,
    checkIfThereAreUpdates: function(){return false}   
}





