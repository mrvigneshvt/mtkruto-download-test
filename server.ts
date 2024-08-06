import { Client, StorageLocalStorage } from "@mtkruto/node";

const apiID = '';
const apiHash = "";

const Storage: StorageLocalStorage = new StorageLocalStorage('mtkruto');

const client = new Client({
    storage: Storage,
    apiId: apiID,
    apiHash: apiHash,
})

const tokem = ''

async function hello() {

    await client.start({ botToken: tokem })
    console.log(await client.getMe())

    client.on('message:document', async (ctx) => {
        const fileId = ctx.message.document.fileId
        console.log('before downloading')
        for await (let chunks of client.download(fileId, {
            offset: 0,
            chunkSize: 256 * 1024
        })) {
            console.log('chunk is ', chunks)
        }
        console.log('after downloading')

    })
}

hello()