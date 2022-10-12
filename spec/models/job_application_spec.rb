require 'rails_helper'

RSpec.describe JobApplication, type: :model do
  describe 'user' do
    it 'should belong to a user' do
      job_application = FactoryBot.create(:job_application)
      expect(job_application.user).to_not be_nil
    end

    xit 'should not allow duplicate job applications for a user'
    xit 'should not allow applications to a closed job'
  end
end
