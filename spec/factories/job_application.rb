FactoryBot.define do
  factory :job_application do
    job
    user
    status { 1 }
  end
end
