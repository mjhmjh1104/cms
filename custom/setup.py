from setuptools import setup, find_packages

setup(
    name="group_min_custom",
    version="1.0",
    packages=find_packages(),
    entry_points={
        "cms.grading.scoretypes": [
            "GroupMinCustom=custom.GroupMinCustom:GroupMinCustom"
        ]
    }
)