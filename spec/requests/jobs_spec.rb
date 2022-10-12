require 'rails_helper'

RSpec.describe 'Jobs', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/jobs'
      expect(response).to have_http_status(:success)
    end

    it "returns a list of jobs for the CURRENT USER ONLY that I haven't applied for" do
      user = FactoryBot.create(:user)
      job = FactoryBot.create(:job)
      job2 = FactoryBot.create(:job)
      job_application = FactoryBot.create(:job_application, user: user, job: job)

      get '/jobs?filter=unapplied'
      expect(response.body).to include(job2.title)
      expect(response.body).to_not include(job.title)
    end
  end
end
