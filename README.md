# Sample


```
#!/bin/bash

GIT_HASH=%build.vcs.number%
GIT_HASH_SHORT=${GIT_HASH:0:7}
BUILD_COUNTER=%build.counter%

echo "##teamcity[buildNumber '0.0.0-$GIT_HASH_SHORT.$BUILD_COUNTER']"

exit 0
```
