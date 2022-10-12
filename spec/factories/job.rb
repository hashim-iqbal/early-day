FactoryBot.define do
  factory :job do
    title { Faker.name }
    description { Faker::Lorem.paragraph }
    status { 1 }
    slug { Faker::Lorem.characters }
  end
end
