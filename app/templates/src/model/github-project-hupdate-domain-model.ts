//https://www.typescriptlang.org/docs/tutorial.html
//typescript types
//https://basarat.gitbooks.io/typescript/content/docs/types/type-system.html

//Advanced types
//https://www.typescriptlang.org/docs/handbook/advanced-types.html

//https://www.typescriptlang.org/docs/handbook/interfaces.html



export interface IUpdatable{
    
    lastUpdateDateTime:any; //fix-me shoud be datetime type
    checkUpdateAtStartUp:boolean;
    getUpdatesDateHystory():any[]; //fix-me: shout be datetime type
    checkIfThereAreUpdates():boolean;
    
}

export interface GitHubProject extends IUpdatable{
    owner:string;
    projectName:string;
}


//var authorWagnerMarques = new Author("wagnermarques"); //error


