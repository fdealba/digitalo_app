module API
  class UsersController < ApplicationController
    def data
      @user = current_user
      render json: { 
        user: @user
      }
    end
  end
end