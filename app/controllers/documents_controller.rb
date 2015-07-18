class DocumentsController < ApplicationController
	before_action :authenticate_user!
	def create
	  document = Document.new( document_params )
	  document.name = params[:document][:file].original_filename
	  document.save!
	  current_user.documents << document
	  redirect_to user_root_url
	end

	private

	def document_params
	  params.require(:document).permit(:name, :file)
	end
end