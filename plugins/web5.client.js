import { Web5 } from '@web5/api';

export default defineNuxtPlugin({
    async setup (nuxtApp) {
        console.log("Plugin loaded")
        let web5;
        let myDID;

        ({ web5, did: myDID } = await Web5.connect({
            sync: '5s'
        }));

        console.log("My DID exist", myDID)

        return {
            provide: {
                web5,
                myDID
            }
        };
    },
});