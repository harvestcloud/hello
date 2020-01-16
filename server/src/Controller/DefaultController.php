<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="app_homepage")
     */
    public function index(Request $request)
    {
        return $this->json([
            'message' => 'Hello, Harvest Cloud!',
            'host' => $_SERVER['HOSTNAME'],
        ]);
    }
}
