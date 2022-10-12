require 'rails_helper'

RSpec.describe 'JobApplications', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/job_applications'
      expect(response).to have_http_status(:success)
    end

    xit 'returns a list of applications for the CURRENT USER ONLY'
  end
end
