import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TreeNode } from './treeNode';

// make your own interface that extends TreeNode
interface MyTreeNode extends TreeNode {
  name: string;
  description?: string;
  image?: string;
  children: MyTreeNode[];
}

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit {

  @Input() data: TreeNode | undefined;
  @Input() hasParent = false;
  @Input() nodeTemplate: TemplateRef<any> | undefined;
  zoomOut = false;

  constructor() {
  }

  public onClick(){
      if (this.data && this.data.onClick) {
          this.data.onClick();
      }
  }

  public toggleZoom() {
      this.zoomOut = !this.zoomOut;
  }

  ngOnInit(): void {
  }
    tree: MyTreeNode = {
        name: 'Felines',
        description: 'Cute playful animals',
        image: 'assets/cat1.webp',
        onClick: () => alert('Death to dogs'),
        children: [
            {
                name: 'Big Cats',
                image: 'assets/bigCat.webp',
                css: 'background-color: #F00000',
                children: [
                    {
                        name: 'Lion',
                        image: 'assets/lion.jpg',
                        children: []
                    },
                    {
                        name: 'Tiger',
                        cssClass: 'yellow-on-hover',
                        image: 'assets/tiger.webp',
                        children: []
                    },
                    {
                        name: 'Cheetah',
                        image: 'assets/cheeta.jpg',
                        children: []
                    }
                ]
            },
            {
                name: 'Small Cats',
                description: 'Cute, but can also be crude. Like when they defecate on your lap, that would be a good example of crudeness on their part',
                image: 'assets/smallCat.webp',
                children: [
                    {
                        name: 'House Cat',
                        image: 'assets/cat2.jpg',
                        children: []
                    },
                    {
                        name: 'Street Cat',
                        image: 'assets/1.webp',
                        children: [
                            {
                                name: 'Dumb Cat',
                                image: 'assets/2.jpg',
                                children: [
                                    {
                                        name: 'Sorry For Bad Example',
                                        image: 'assets/3.jpg',
                                        children: []
                                    }
                                ],
                            },
                            {
                                name: 'Good Cat',
                                image: 'assets/4.webp',
                                children: [
                                    {
                                        name: 'Binary Search Tree',
                                        image: 'assets/5.jpg',
                                        children: [
                                            {
                                                name: '7',
                                                image: 'assets/6.png',
                                                children: [
                                                    {
                                                        name: '3',
                                                        image: 'assets/7.webp',
                                                        children: [
                                                            {
                                                                name: '2',
                                                                image: 'assets/8.jpg',
                                                                children: []
                                                            },
                                                            {
                                                                name: '5',
                                                                image: 'assets/9.jpg',
                                                                children: []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: '13',
                                                        description: 'An odd yet funny number.',
                                                        image: 'assets/10.jpg',
                                                        children: [
                                                            {
                                                                name: '11',
                                                                description: 'All nodes to the right are greater',
                                                                image: 'assets/11.jpg',
                                                                children: []
                                                            },
                                                            {
                                                                name: '17',
                                                                image: 'assets/12.jpg',
                                                                description: 'This number is less that 17.00000001',
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Fake Cats',
                image: 'assets/13.jpg',
                children: [],
                onClick: () => console.log('Google chrome stole some RAM')
            }
        ]
    };
}
