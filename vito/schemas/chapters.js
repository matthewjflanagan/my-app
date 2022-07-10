export default {
    name: "chapters",
    title: "Chapters",
    type: "document",
    fields: [
                {
                    name: "name",
                    title: "Chapter Title",
                    type: "string"
                },
                {
                    name: "slug",
                    title: "Slug",
                    type: "slug",
                    options: {
                        source: "name",
                        maxLength: 96
                    }
                },
                {
                    name: "cover",
                    title: "Chapter Cover",
                    type: "image",
                    alt: "Chapter Cover",
                    options: {
                        hotspot: true
                    }
                },
                {
                    name: "photo",
                    title: "Photo",
                    type: "array",
                    of: [
                        {   
                            type: "object",
                            fields: [
                                {
                                    name: "photo",
                                    title: "Photo",
                                    type: "reference",
                                    to: [{ type: "photo" }],
                                },
                            ],
                        }
                    ]
                },
                {
                    name: "description",
                    title: "Description",
                    type: "array",
                    of: [{ type: "block" }],
                },
            ]
}