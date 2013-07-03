
__author__ = 'adamj'

from tastypie.authorization import Authorization
from tastypie.exceptions import BadRequest
from tastypie.paginator import Paginator
from tastypie.resources import ModelResource
from tastypie.serializers import Serializer
from video_list.models import Video

class EXT4Paginator(Paginator):
    def get_offset(self):
        offset = self.offset

        if 'start' in self.request_data:
            offset = self.request_data['start']

        try:
            offset = int(offset)
        except ValueError:
            raise BadRequest("Invalid offset '%s' provided. Please provide an integer." % offset)

        if offset < 0:
            raise BadRequest("Invalid offset '%s' provided. Please provide a positive integer >= 0." % offset)

        return offset


class EXT4Serializer(Serializer):

    def to_json(self, data, options=None):
        data['success'] = True
        return super(EXT4Serializer, self).to_json(data, options)


class VideoResource(ModelResource):
    class Meta:
        queryset = Video.objects.all()
        resource_name = 'video'
        allowed_methods = ['get', 'post', 'delete']
        authorization = Authorization()  # TODO: Replace with secure Auth in real-world
        serializer = EXT4Serializer()
        paginator_class = EXT4Paginator
