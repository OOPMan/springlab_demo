from django.conf.urls import patterns, include, url
from video_list.api import VideoResource

video_resource = VideoResource()

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SpringLab_Demo.views.home', name='home'),
    # url(r'^SpringLab_Demo/', include('SpringLab_Demo.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    (r'^api/', include(video_resource.urls))
)
