import { faker } from "@faker-js/faker"

const ArticleList =[
    {
        "image" : faker.image.url({ width: 200, height: 300 }),
        "title" : faker.lorem.sentence(1),
        "description" : faker.lorem.paragraph(1),
        "name" : faker.person.fullName()
    },
    {
        "image" : faker.image.url({ width: 200, height: 300 }),
        "title" : faker.lorem.sentence(1),
        "description" : faker.lorem.paragraph(1),
        "name" : faker.person.fullName()
    },
    {
        "image" : faker.image.url({ width: 200, height: 300 }),
        "title" : faker.lorem.sentence(1),
        "description" : faker.lorem.paragraph(1),
        "name" : faker.person.fullName()
    }
]

export default ArticleList