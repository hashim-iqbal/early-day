class JobApplication < ApplicationRecord
  belongs_to :job
  belongs_to :user

  # Has status: applied, reviewed, rejected, withdrawn
end
