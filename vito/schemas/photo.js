export default {
    name: "photo",
    title: "Photo",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Photo Name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            alt: "vito images",
            options: {
                hotspot: true,
            }
        },
        {
            name: "notes",
            title: "Notes",
            type: "text",
        }
    ]
}