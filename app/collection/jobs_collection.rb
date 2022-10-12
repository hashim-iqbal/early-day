# frozen_string_literal: true

class JobsCollection < BaseCollection
  private

  def filter_by_status
    @relation = model.all

    filter { @relation.send(params[:filter]) }
  end
end
