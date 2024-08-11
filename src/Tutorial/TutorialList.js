import { faker } from "@faker-js/faker"

const TutorialList =[
    {
        "image" : faker.image.url({ width: 250, height: 200 }),
        "title" : faker.lorem.sentence(1),
        "description" : faker.lorem.paragraph(1),
        "name" : faker.person.fullName()
    },
    {
        "image" : faker.image.url({ width: 250, height: 200 }),
        "title" : faker.lorem.sentence(1),
        "description" : faker.lorem.paragraph(1),
        "name" : faker.person.fullName()
    },
    {
        "image" : faker.image.url({ width: 250, height: 200 }),
        "title" : faker.lorem.sentence(1),
        "description" : faker.lorem.paragraph(1),
        "name" : faker.person.fullName()
    }
]

export default TutorialList