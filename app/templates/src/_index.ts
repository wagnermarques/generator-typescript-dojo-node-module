//https://github.com/dojo/typings/blob/master/examples/lang/src/main.ts
import {IUpdatable,GitHubProject} from "./model/github-project-hupdate-domain-model"

import * as lang from 'dojo/_base/lang';


let project: GitHubProject = {

    owner : 'SolucoesemTI',
    projectName : 'sismerenda',
    lastUpdateDateTime : null,
    checkUpdateAtStartUp:true,
    getUpdatesDateHystory:[],
    checkIfThereAreUpdates: function(){return false}   
}



/**
 * A basic function, where we will partially bind
 */
function foo(a: string, b: string): string {
	return a + b;
}

/**
 * Here we specify the resulting function signature and TypeScript will then
 * allow us to guard against that signature, instead of just being a "generic"
 * function.
 */
const partFoo = lang.partial<(b: string) => string>(foo, 'foo');
