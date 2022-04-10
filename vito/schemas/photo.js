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