SpringLab-Demo
==============

A Python demo for the guys at SpringLab.

This demo uses Django and TastyPie on the server-side, while EXT4 and the Google JS Client API is used
on the browser end of things,

The demo allows you to manage a list of YouTube videos using a basic interface. The user is able to add new Videos,
delete existing videos and navigate the system using pagination controls.

The server-side is backed by a basic SQLite3 database for demo purposes and the video_list_video table in the DB
only stores the URL of videos.

The client-side of the application uses the EXT4 framework to provide a consistent, functonal UI while the
Google JS Client is used to dynamically retrieve the Title and Description metadata of the Videos on-demand. This process,
although slightly more involved than simply retrieving said data on the addition of Video entries, ensures that
the Title and Description data will always be fresh and do not need to be stored server-side.

The provided Fabric file has only a single task, 'clear_video_list_data', which can be used to reset the Video list.

Python Environment was 2.7.2 x86 with the following packages:

Django==1.5.1
Fabric==1.6.1
distribute==0.6.31
django-tastypie==0.9.15
httplib2==0.8
mimeparse==0.1.3
paramiko==1.10.1
python-dateutil==2.1
python-gflags==2.0
six==1.3.0
uuid==1.30
