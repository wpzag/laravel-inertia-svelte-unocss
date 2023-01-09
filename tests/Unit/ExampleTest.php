<?php

    it('should return a successful response', function () {
        $response = $this->get('/');
        $response->assertStatus(200);
    });
